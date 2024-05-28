const Footer = () => {
  return (
    <div className="bg-blue-800 py-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          MERNholidays.com
        </span>
        <span className="text-white font-bold tracking-tighter flex gap-4">
          <p className="cursor-pointer">Private Policy</p>
          <p className="cursor-pointer">Terms of Servide</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
