import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'; // Ensure firebase is properly configured
import { collection, query, where, getDocs } from 'firebase/firestore';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import './BailRequestTrack.css'; // We'll add custom CSS for the floating effect

const FloatingProgressBar = () => {
  const [bailRequests, setBailRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchBailRequests = async () => {
      if (!user) {
        console.log('User not logged in');
        return;
      }

      try {
        const q = query(collection(db, 'bailRequests'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const requests = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
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

  const getStatusProgress = (status) => {
    switch (status) {
      case 'Pending':
        return 25;
      case 'In Review':
        return 50;
      case 'Approved':
        return 100;
      case 'Rejected':
        return 0;
      default:
        return 0;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bailRequests.length) {
    return <div>No bail requests found.</div>;
  }

  const latestRequest = bailRequests[0];

  return (
    <Link to={`/bailtrackpage/${latestRequest.id}`} className="fixed bottom-10 left-10 w-28 h-28">
      <div className="bg-white shadow-lg p-3 rounded-full cursor-pointer floating-effect">
        <CircularProgressbar
          value={getStatusProgress(latestRequest.status)}
          text={`${getStatusProgress(latestRequest.status)}%`}
          styles={buildStyles({
            textSize: '14px',
            pathColor: getStatusProgress(latestRequest.status) === 100 ? '#4caf50' : '#ff6347',
            textColor: '#000000',
            trailColor: '#d6d6d6',
          })}
        />
        <div className="mt-1 text-center">
          <p className="text-xs font-semibold text-gray-700">Case: {latestRequest.caseNumber}</p>
          <p className="text-xs text-gray-500">{latestRequest.applicantName}</p>
        </div>
      </div>
    </Link>
  );
};

export default FloatingProgressBar;
