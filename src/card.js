import React from 'react';

function DashboardItem({ title, insight, intensity, likelihood, published, url }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{insight}</p>
        <p>Intensity: {intensity}</p>
        <p>Likelihood: {likelihood}</p>
        <p>Published: {published}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Link</a>
      </div>
    </div>
  );
}

function Dashboard() {
  const data = {
    "end_year": "",
    "intensity": 6,
    "sector": "Energy",
    "topic": "gas",
    "insight": "Annual Energy Outlook",
    "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
    "region": "Northern America",
    "start_year": "",
    "impact": "",
    "added": "January, 20 2017 03:51:25",
    "published": "January, 09 2017 00:00:00",
    "country": "United States of America",
    "relevance": 2,
    "pestle": "Industries",
    "source": "EIA",
    "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
    "likelihood": 3
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4 text-center">Colorful Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <DashboardItem
            title={data.title}
            insight={data.insight}
            intensity={data.intensity}
            likelihood={data.likelihood}
            published={data.published}
            url={data.url}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
