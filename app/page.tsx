import Card from "@/components/homepage/card";
import Footer from "@/components/homepage/footer";
import Navbar from "@/components/homepage/navbar";
import Review from "@/components/homepage/review";

export default function Home() {
  return (
     <>
        <Navbar/>
        <Card/>
        <Review/>
        <Footer/>
     </>
  );
}
