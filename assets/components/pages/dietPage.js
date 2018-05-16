import React from 'react';
import { Image, Text, StyleSheet, ScrollView, View,TouchableHighlight } from 'react-native';
import BackButton from '../backButton';

export default class DietPage extends React.Component{
  render() {
    return (
      <ScrollView style ={infoStyle.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
          <BackButton />
        </TouchableHighlight>
      </View>
      <Text style ={titleStyle.container}>What is the Low-Information Diet?</Text>
      <Text style ={contentStyle.container}>It is just as it sounds: a diet for
      your information intake.{"\n\n"}
      Consciously restricting your information feeds
      so that you only 'consume' useful/healthy information and can focus on the
      important information in your life.</Text>
      <Text style ={titleStyle.container}>Why should I care? How will this help me?</Text>
      <Text style ={contentStyle.container}>Same reason you follow a food diet.{"\n\n"}

      Food used to be scarce, and so our brains are wired to reward us for eating
      energy rich foods such as sugars and fats. But in the modern age, we overconsume
      those sources of energy, and need to control our diets and focus on eating
      healthier foods.{"\n\n"}

      Information used to be scarce, and so our brains are wired
      to reward us for learning something new. Now we are bloated with data and
      information, but we still get that dopamine reward for refreshing and scrolling.
      {"\n\n"}
      We need to start monitoring our info intake, like we do our food intake,
      so that we can live healthy lives in the Information Age. </Text>
      <Text style ={titleStyle.container}>How does Feedr work?</Text>
      <Text style ={contentStyle.container}>Feedr works in two ways:{"\n\n"}
      1) Consolidates your social media platforms and gives you a finite amount
      of time consuming useless information{"\n\n"}
      2) Cuts these platforms down to their barebones to help you avoid falling into the Feed Trap: Mindlessly
      refreshing and scrolling for minutes on end.{"\n\n"}
      Once your account(s) are linked
      to Feedr, you can delete that apps without fear of missing out on important
      stuff!</Text>
      </ScrollView>
    )
  }
}

const infoStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    paddingVertical: 0

  },
});
const titleStyle = StyleSheet.create({
  container: {
    fontSize: 35,
    fontFamily: 'Helvetica',
    padding: 15,
    paddingLeft: 0,
    paddingRight: 0
  },
});
const contentStyle = StyleSheet.create({
  container: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    paddingLeft: 5,
    paddingRight: 5,
  },
});
