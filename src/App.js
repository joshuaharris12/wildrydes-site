import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, Heading, View, Card, Image } from "@aws-amplify/ui-react";
import logo from './logo.svg';

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);