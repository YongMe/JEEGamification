import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [stats, setStats] = useState({ studyTime: 0, streak: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get('/api/user/stats');
      setStats(res.data);
    };
    fetchStats();
  }, []);

  const data = {
    labels: ['Study Time', 'Streak'],
    datasets: [
      {
        label: 'Stats',
        data: [stats.studyTime, stats.streak],
        backgroundColor: ['#4dabf7', '#ff6b6b'],
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;