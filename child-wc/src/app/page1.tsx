import { useNavigate } from "react-router";
import Button from "@/components/Button";

function Page1() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Page 1</p>
      <Button onClick={() => navigate("/page2")} />
    </div>
  );
}

export default Page1;
