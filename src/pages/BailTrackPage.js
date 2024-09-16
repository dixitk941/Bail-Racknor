import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'; // Ensure firebase is properly configured
import { collection, query, where, getDocs } from 'firebase/firestore';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

const BailTrackPage = () => {
  const [bailRequests, setBailRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchBailRequests = async () => {
      if (!user) {
        console.log('User not logged in');
        setLoading(false);
        return;
      }

      try {
        // Create a query that filters bail requests by the logged-in user's ID
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
    return <div>No bail requests found for this user.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Bail Request Tracker</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bailRequests.map(request => (
            <div key={request.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{request.applicantName}</h2>
                <div style={{ width: 50, height: 50 }}>
                  <CircularProgressbar
                    value={getStatusProgress(request.status)}
                    text={`${getStatusProgress(request.status)}%`}
                    styles={buildStyles({
                      textSize: '16px',
                      pathColor: getStatusProgress(request.status) === 100 ? '#4caf50' : '#ff6347',
                      textColor: '#000000',
                      trailColor: '#d6d6d6',
                    })}
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-2"><strong>Case Number:</strong> {request.caseNumber}</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> {request.email}</p>
              <p className="text-gray-600 mb-2"><strong>Address:</strong> {request.address}</p>
              <p className="text-gray-600 mb-2"><strong>Status:</strong> {request.status}</p>
              <p className="text-gray-600 mb-4"><strong>Additional Info:</strong> {request.additionalInfo}</p>
              <Link to={`/bailtrackpage/${request.id}`} className="text-indigo-600 hover:text-indigo-900">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BailTrackPage;
