import React, { Fragment, useEffect} from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../components/activities/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';


function App() {
  const {activityStore} = useStore();
  const {loadingInitial, loadActivities} = activityStore;

  useEffect(() => {
    loadActivities();
  }, [activityStore])


  if (loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: 100}}>
        <ActivityDashboard />
        </Container>
    </Fragment>
  );
}

export default App;
