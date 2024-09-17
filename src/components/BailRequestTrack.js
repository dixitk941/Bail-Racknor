import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'; // Ensure firebase is properly configured
import { collection, query, where, getDocs } from 'firebase/firestore';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

const FloatingProgressBar = () => {
  const [bailRequests, setBailRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBailRequests = async () => {
      if (!user) {
        console.log('User not logged in');
        setLoading(false);
        return;
      }

      try {
        const q = query(collection(db, 'bailRequests'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const requests = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBailRequests(requests);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bail requests: ', error);
        setLoading(false);
      }
    };

    fetchBailRequests();
  }, [user]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const progress = bailRequests.length ? (bailRequests.filter(req => req.status === 'approved').length / bailRequests.length) * 100 : 0;

  const handleClick = () => {
    navigate('/bailtrackpage/:id');
  };

  return (
    <div className={`fixed bottom-4 right-4 p-2 rounded-full shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} onClick={handleClick} style={{ cursor: 'pointer', width: '80px', height: '80px' }}>
      <CircularProgressbar
        value={progress}
        text={`${Math.round(progress)}%`}
        styles={buildStyles({
          textSize: '16px',
          textColor: theme === 'dark' ? '#fff' : '#000',
          pathColor: theme === 'dark' ? '#4f46e5' : '#6366f1',
          trailColor: theme === 'dark' ? '#374151' : '#e5e7eb',
        })}
      />
    </div>
  );
};

export default FloatingProgressBar;