import Hero from "@/components/ui/Hero";

const Home = () => {
  return (
    <div className="w-full h-screen bg-bgcolor relative flex items-center justify-center">
      <div className="absolute flex items-center justify-center">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
