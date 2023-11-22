import * as React from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ThemeContext } from '../../kits/AppTheme';
import * as KolynStyle from '../../kits/KolynStyleKit';
import { CommonPart } from '../../kits/CommonPart';
import { GetExampleQuestionList } from '../../props/QuestionHistory';


export function ClickerPageQuestion({navigation}) {
  const themedStyles = ThemedStyles();

  const route = useRoute();
  const fromPreviousPage = route.params?.previousPage;

  var question;
  var questionNavigate;
  if (fromPreviousPage != null && 
      fromPreviousPage == "HistoryDetail") {
    // if you were from 'history detail' page, go back
    questionNavigate = (response) => {navigation.goBack();}
    question = route.params?.question;
  }
  else {
    // if you were from other pages, navigate to reveal answer part
    question = GetExampleQuestionList()[0].question;
    questionNavigate = (response) => {
      navigation.navigate("ClickerPageReveal", {question: question, response: response});
    }
  }

  const [questionTitleText, onChangeQuestionTitleText] = React.useState(question.getTitle());
  const [timerText, onChangeTimerext] = React.useState('00: 59');
  const [questionText, onChangeQuestionText] = React.useState(question.getContext());

  return (
      <CommonPart title={"Clicker"}
        components={
          <View style={themedStyles.background}>

            <View style={{flex: 2}}>
              <QuestionTitleLabel 
                labelStyle={themedStyles.questionTitleLabel}
                questionTitleText={questionTitleText}
                onChangeQuestionTitleText={onChangeQuestionTitleText}
              />

              <View style={themedStyles.timerBox}>
                <TimerLabel
                  labelStyle={themedStyles.timer}
                  timerText={timerText}
                  onChaneTimerText={onChangeTimerext}
                />
              </View>

            </View>

            <View style={{flex: 4}}>
              <QuestionTextBox
                onChangeQuestionText={onChangeQuestionText}
                questionText={questionText}
                textfieldStyle={themedStyles.inputTextfield}
              />
            </View>

            <View style={{flex: 6}}>

              <View style={{flex: 2}}>
                <OptionButton
                  onPress={()=>{questionNavigate('A');}}
                  text={question.getPrettyChoices()[0]}
                  buttonStyle={themedStyles.optionButton}
                  labelStyle={themedStyles.optionButtonLabel}
                />
              </View>

              <View style={{flex: 2}}>
                <OptionButton
                  onPress={()=>{questionNavigate('B');}}
                  text={question.getPrettyChoices()[1]}
                  buttonStyle={themedStyles.optionButton}
                  labelStyle={themedStyles.optionButtonLabel}
                />
              </View>

              <View style={{flex: 2}}>
                <OptionButton
                  onPress={()=>{questionNavigate('C');}}
                  text={question.getPrettyChoices()[2]}
                  buttonStyle={themedStyles.optionButton}
                  labelStyle={themedStyles.optionButtonLabel}
                />
              </View>

              <View style={{flex: 2}}>
                <OptionButton
                  onPress={()=>{questionNavigate('D');}}
                  text={question.getPrettyChoices()[3]}
                  buttonStyle={themedStyles.optionButton}
                  labelStyle={themedStyles.optionButtonLabel}
                />
              </View>

              </View>
          </View>
        }
      />
  );
}

/* Internal logic code start */

function GetSubColor() {
  const themeManager = React.useContext(ThemeContext);
  const currentTheme = themeManager.theme;
  return currentTheme.subColor;
}

/* Internal logic code end */

/*************************************************************************************************/

/* Connect to backend logic code start */

/*
  Called after the timer reaches 00:00
  Send the current student response to the backend
*/
function OnTimeEnd(studentResponse, studentID) {

}

/* Connect to backend logic code end */

/*************************************************************************************************/

/* User interface code start */

function QuestionTitleLabel({ labelStyle, questionTitleText, onChangeQuestionTitleext }) {
  return (
    <TextInput
      editable={false}
      style={labelStyle}
      value={questionTitleText}
      onChangeText={onChangeQuestionTitleext}
    />
  );
}

function TimerLabel({labelStyle, timerText, onChaneTimerText}) {
  return (
    <TextInput
      editable={false}
      style={labelStyle}
      value={timerText}
      onChangeText={onChaneTimerText}
    />
  );
}

function QuestionTextBox({ onChangeQuestionText, questionText, textfieldStyle }) {
  return (
    <TextInput
      style={textfieldStyle}
      value={questionText}
      onChangeText={onChangeQuestionText}
      editable={false}
      multiline={true}
      contextMenuHidden={true}
    />
  );
}

function OptionButton({onPress, text, buttonStyle, labelStyle}) {
  return (
    <Pressable
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={labelStyle}>{text}</Text>
    </Pressable>
  );
}

/* User interface code end */

function ThemedStyles() {
  const themeManager = React.useContext(ThemeContext);
  const currentTheme = themeManager.theme;

  return (StyleSheet.create({
    background: StyleSheet.flatten([
      {top: -20},
      KolynStyle.kolynPrimaryColorScreen(currentTheme.primaryColor)
    ]),

    questionTitleLabel: StyleSheet.flatten([
      {alignSelf: 'center', top: 20},
      KolynStyle.kolynLabel(currentTheme.fontSizes.medium, currentTheme.mainFont, currentTheme.subColor)
    ]),

    timerBox: {
      borderColor: GetSubColor(), 
      borderWidth: 4, 
      borderRadius: 10, 
      alignSelf: 'flex-end', 
      start: -30, 
      width: 100
    },

    timer: StyleSheet.flatten([
      {alignSelf: 'center'},
      KolynStyle.kolynLabel(currentTheme.fontSizes.small, currentTheme.mainFont, currentTheme.subColor)
    ]),

    inputTextfield: StyleSheet.flatten([
      {
        height: 150, 
        width: 300, 
        borderWidth: 3, 
        borderColor: currentTheme.subColor,
      }, 
      KolynStyle.kolynInputTextfield(currentTheme.primaryColor, currentTheme.mainFont),
    ]),

    optionButton: StyleSheet.flatten([
      {width: 280, backgroundColor:currentTheme.mainColor, alignSelf: 'center'}, 
      KolynStyle.kolynButton(currentTheme.mainColor),
    ]),

    optionButtonLabel: StyleSheet.flatten([
      {backgroundColor: currentTheme.mainColor},
      KolynStyle.kolynLabel(currentTheme.fontSizes.tiny, currentTheme.mainFont, currentTheme.primaryColor)
    ]),

  }));
}
