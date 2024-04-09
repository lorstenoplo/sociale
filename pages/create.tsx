import { Form } from "@/components/CreatePost/Form";
import { GlobeSection } from "@/components/CreatePost/GlobeSection";
import Navbar from "@/components/Navbar";

export default function Create() {
  return (
    <div className="bg-black py-6">
      <Navbar />
      <GlobeSection />
      <Form />
    </div>
  );
}
