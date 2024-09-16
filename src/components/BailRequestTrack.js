import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

const BailRequestTrack = ({ theme }) => {
  const [bailRequests, setBailRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBailRequests = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'bailRequests'));
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
  }, []);

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

  const pathColor = theme === 'dark' ? '#ff0000' : '#ff6347'; // Bright red for dark theme, tomato for light theme
  const textColor = theme === 'dark' ? '#ffffff' : '#000000'; // White text for dark theme, black text for light theme

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {bailRequests.map(request => (
        <Link to={`/bailtrackpage/${request.id}`} key={request.id} className="mb-4 block">
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbar
              value={getStatusProgress(request.status)}
              text={`${getStatusProgress(request.status)}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: pathColor,
                textColor: textColor,
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <p className="text-center mt-2 text-sm" style={{ color: textColor }}>
            {request.applicantName}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BailRequestTrack;