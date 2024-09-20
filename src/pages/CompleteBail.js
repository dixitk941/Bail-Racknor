import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebaseConfig'; // Correctly importing from firebaseConfig.js

const CompleteBail = () => {
  const [bailData, setBailData] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true); // To handle the loading state properly
  const [error, setError] = useState(null); // To handle any potential errors

  useEffect(() => {
    const fetchBailDetails = async () => {
      try {
        const bailId = "exampleBailId"; // Replace with the actual bail ID
        const bailDoc = await getDoc(doc(db, "bailApplications", bailId));

        if (bailDoc.exists()) {
          const data = bailDoc.data();
          setBailData(data);

          const docs = await Promise.all(
            data.documents.map(async (docName) => {
              const docRef = ref(storage, `bailDocuments/${bailId}/${docName}`);
              const docUrl = await getDownloadURL(docRef);
              return { name: docName, url: docUrl };
            })
          );
          setDocuments(docs);
        } else {
          console.error("No such document!");
          setError("No such document exists.");
        }
      } catch (err) {
        console.error("Error fetching bail details:", err);
        setError("Error fetching bail details.");
      } finally {
        setLoading(false); // Set loading to false once the fetching is done
      }
    };

    fetchBailDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Display the error message if any
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bail Application Details</h1>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        <p><strong>Applicant Name:</strong> {bailData.applicantName}</p>
        <p><strong>Case Number:</strong> {bailData.caseNumber}</p>
        <p><strong>Email:</strong> {bailData.email}</p>
        <p><strong>Address:</strong> {bailData.address}</p>
        <p><strong>Additional Info:</strong> {bailData.additionalInfo}</p>
      </div>
      
      <h2 className="text-xl font-bold mb-2">Documents</h2>
      <div className="bg-white shadow-md rounded p-4 mb-4">
        {documents.length > 0 ? (
          documents.map((doc) => (
            <div key={doc.name}>
              <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {doc.name}
              </a>
            </div>
          ))
        ) : (
          <p>No documents available</p>
        )}
      </div>
      
      <h2 className="text-xl font-bold mb-2">Track Bail</h2>
      <div className="bg-white shadow-md rounded p-4">
        <a href={bailData.trackingUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Track Bail Application
        </a>
      </div>
    </div>
  );
};

export default CompleteBail;
