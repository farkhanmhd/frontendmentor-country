const ListDetail = ({ title, data }: { title: string; data: string }) => {
  return (
    <li>
      <span className="font-semibold">{title}</span>
      <span>: {data}</span>
    </li>
  );
};

export default ListDetail;
