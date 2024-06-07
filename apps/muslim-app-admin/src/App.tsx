import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdhanScheduleList } from "./adhanSchedule/AdhanScheduleList";
import { AdhanScheduleCreate } from "./adhanSchedule/AdhanScheduleCreate";
import { AdhanScheduleEdit } from "./adhanSchedule/AdhanScheduleEdit";
import { AdhanScheduleShow } from "./adhanSchedule/AdhanScheduleShow";
import { AdkarList } from "./adkar/AdkarList";
import { AdkarCreate } from "./adkar/AdkarCreate";
import { AdkarEdit } from "./adkar/AdkarEdit";
import { AdkarShow } from "./adkar/AdkarShow";
import { MosqueList } from "./mosque/MosqueList";
import { MosqueCreate } from "./mosque/MosqueCreate";
import { MosqueEdit } from "./mosque/MosqueEdit";
import { MosqueShow } from "./mosque/MosqueShow";
import { PrayerList } from "./prayer/PrayerList";
import { PrayerCreate } from "./prayer/PrayerCreate";
import { PrayerEdit } from "./prayer/PrayerEdit";
import { PrayerShow } from "./prayer/PrayerShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Muslim APP"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AdhanSchedule"
          list={AdhanScheduleList}
          edit={AdhanScheduleEdit}
          create={AdhanScheduleCreate}
          show={AdhanScheduleShow}
        />
        <Resource
          name="Adkar"
          list={AdkarList}
          edit={AdkarEdit}
          create={AdkarCreate}
          show={AdkarShow}
        />
        <Resource
          name="Mosque"
          list={MosqueList}
          edit={MosqueEdit}
          create={MosqueCreate}
          show={MosqueShow}
        />
        <Resource
          name="Prayer"
          list={PrayerList}
          edit={PrayerEdit}
          create={PrayerCreate}
          show={PrayerShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
