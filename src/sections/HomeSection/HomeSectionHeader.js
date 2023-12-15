'use client';

import useCapitalize from '@/hooks/use-capitalize';

const HomeSectionHeader = ({ userData }) => {
  const capitalize = useCapitalize();

  return (
    <div className="home-section-header">
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', margin: 0 }}>
        {`Hi ${capitalize(userData.firstname)}! We're so happy to see you here!`}
      </h1>
      <div style={{ display: 'flex', width: '100%', gap: '25px', marginTop: '22px' }}>
        {/* COMPLETION CARD */}
        <div className="card" style={{ width: '215px' }}>
          <div className="progress-ring" style={{ marginBottom: '15px' }}>
            0%
          </div>
          <span style={{ fontSize: '27px', fontWeight: 500, marginBottom: '8px' }}>Completion</span>
          <div className="plan-count-pill">4 Session Plan</div>
        </div>
        {/* EMPTY CARD */}
        <div className="card" style={{ flexGrow: 1 }}></div>
      </div>
    </div>
  );
};

export default HomeSectionHeader;
