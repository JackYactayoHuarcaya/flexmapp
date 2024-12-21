import logoFlexmap from "../../../assets/logo-flexmapp.svg";
const Load = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--c)]">
      <div className="w-full min-h-screen flex items-center justify-center ">
        <div
          className="absolute bg-slate-400 w-[175px] 
                      h-[172px] rotate-90 rounded-full z-0
                      blur-[30px] from-[var(--bg1)] to-[var(--bg2)] bg-gradient-to-l"
        ></div>
        <img src={logoFlexmap} alt="logo" className="w-[8rem] z-30" />
      </div>
    </div>
  );
};
export default Load;
