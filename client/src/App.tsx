import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";
import Details from "./components/details";
import axios from "axios";
import { useState, useEffect } from "react";

type dataType = {
  name: String,
  rollNo: String
}

export function App() {
  const [data, setData] = useState<undefined | dataType>();

  useEffect(() => {
    const runAsync = async () => {
      try {
        const res = await axios.get('http://localhost:3030/studentDetails');
        console.log(res); 
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    }

    runAsync();
  }, []);

  if (!data) return <>loading, please try again</>;

  return (
    <Details name={data.name} rollNo={data.rollNo} />
  );
}

export default App;
