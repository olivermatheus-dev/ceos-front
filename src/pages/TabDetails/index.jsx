import { useParams } from "react-router-dom";

export function TabDetails() {
  const params = useParams();
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    async function fetchTabs() {
      try {
        const response = await api.get("/tabs");

        setTabs(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTabs();
  }, []);

  const tab = tabs.find((tabs) => {
    tabs.id === Number(params);
  });
  console.log(tab);

  return <></>;
}
