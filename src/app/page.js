import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-fixed bg-no-repeat bg-center bg-cover ">
      <div  className="bg-black w-full h-full bg-opacity-50"  >
        <div className="relative top-2/4 m-auto text-white text-center" >
          <h1 className="" >Unlimited Movies</h1>
          <p className="text-2xl font-[400]" >
            Watch anywhere. Cancel anytime.
          </p>
          <Link href={"/register"}  >
          <button className="btn-danger w-[250px]" >
            Watch Free For 30 Days
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
