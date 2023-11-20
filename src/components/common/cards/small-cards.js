import { Card } from 'antd';

const SmallCard = ({ heading, description }) => {
  return (
    <Card style={{ border: '1px solid #87D6C6' }}>
      <h2 style={{ lineHeight: '2px' }} className="font-medium">
        {heading}
      </h2>
      <p className="font-xs">{description}</p>
    </Card>
  );
};

export default SmallCard;
