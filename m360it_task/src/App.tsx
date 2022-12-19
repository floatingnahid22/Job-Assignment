import { useMissionsQuery } from "./services/missionsApi";
import "./App.css";
import { Card } from "antd";

const App = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useMissionsQuery();

  return (
    <div className="App">
      <h1>SpaceX Launches</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div className="data">
          {data?.map((missions, index) => {
            return (
              <div className="data" key={index}>
                <Card title={missions.mission_name} style={{ width: 300 }}>
                  <p>Flight Number: {missions.flight_number}</p>
                  <p>Missions Name: {missions.mission_name}</p>
                  <p>Launch Date Utc: {missions.launch_date_utc} </p>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
