const Material = ({ url }: { url: string }) => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto scroll-style">
      <div>
        <img src={url} alt="" className="" />
      </div>
    </div>
  );
};
export default Material;
