import { useNavigate } from "react-router";
import Button from "@/components/Button";

function Page2() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Page 2</p>
      <Button onClick={() => navigate("/page1")} />
    </div>
  );
}

export default Page2;
