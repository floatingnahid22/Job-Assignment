import { useMissionsQuery } from "./services/missionsApi";
import "./App.css";

const App = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useMissionsQuery();

  return (
    <div className="App">
      <h1>SpaceX Launches: Mission's Name</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map((mission) => {
            return (
              <div className="data" key={mission.mission_name}>
                <span>{mission.mission_name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
