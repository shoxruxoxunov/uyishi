function NavBar() {
  return (
    <main>
      <div className="container  mb-[32px] mt-[28px] xl:mt-[20px] xl:rounded-lg bg-[#fff] shadow-[0px 15px 30px 0px rgba(0, 81, 171, 0.15)]">
        <h1 className="mb-[24px] w-[263px] xl:w-[324px] text-[#2AB3B1] text-xl xl:text-2xl  xl:text-[normal] xl:font-bold xl:leading-[normal] tracking-[-0.25px] xl:tracking-[-0.3px] xl:px-6 px-2.5">
          Join our community
        </h1>
        <p className=" mb-[16px] w-[263px] xl:w-[367px] text-[#C0DF33] text-sm xl:text-lg xl:text-[normal] xl:font-bold leading-[20px] xl:leading-[normal] tracking-[-0.187px] xl:tracking-[-0.225px] xl:px-6 px-2.5">
          30-day, hassle-free money back guarantee
        </p>
        <p className="w-[263px] xl:w-[555px] text-[#9AA7BE] text-sm xl:text-base xl:text-[normal]  xl:font-normal xl:leading-6 tracking-[-0.175px] xl:tracking[-0.2px] xl:px-6 px-2.5">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <section>
        <div className="container xl:flex">
          <div className="xl:w-[318px] w-[318px] bg-[#2AB3B1] xl:px-6 px-2.5">
            <h2 className="pt-6 pb-4 xl:py-10 text-[#fff] text-lg  xl:text-lg  xl:text-[normal]  xl:font-bold xl:leading-[normal] tracking-[ -0.25px] xl:tracking-[-0.3px]">
              Monthly Subscription
            </h2>
            <p className="pb-[4px] text-[#fff] text-3xl text-[normal] font-bold tracking-[0.4px]">
              $29{" "}
              <span className="text-[#fff] opacity-50 text-sm">per month</span>
            </p>
            <p className="pb-[26px] w-[238px] text-[#fff] text-sm font-normal leading-6 tracking-[-0.2px]">
              Full access for less than $1 a day
            </p>
            <button className="text-[#fff] text-sm font-bold leading-[normal] tracking-[-0.2px] py-[15px] px-[102px] xl:py-[15px] xl:px-[89px] bg-[#C0DF33] rounded-md h-12 mb-[24px]">
              Sign Up
            </button>
          </div>
          <div className="bg-[#2AB3B1] opacity-[0.7]xl:w-[318px] w-[318px] xl:text-center px-2.5">
            <h2 className="text-[#fff] text-sm font-bold py-6 pb-4 xl:py-10 xl:w-[238px] ">
              Why Us
            </h2>
            <p className="w-[238px] text-[#fff] text-xs font-normal leading-5 opacity-[0.75] pb-6">
              Tutorials by industry experts <br /> Peer & expert code review{" "}
              <br />
              Coding exercisesAccess to <br /> our GitHub repos <br /> Community
              forumFlashcard <br />
              decksNew videos every week
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default NavBar;
