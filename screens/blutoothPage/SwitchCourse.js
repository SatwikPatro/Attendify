import * as React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { ThemeContext } from '../../kits/AppTheme';
import * as KolynStyle from '../../kits/KolynStyleKit';
import { CommonPart } from '../../kits/CommonPart';
import { GetSampleCourseList } from '../../props/CourseList';
import { setCurrentCourseIndex } from '../../props/CurrentCourse';


const {width, height} = Dimensions.get('window');

export function SwitchCoursePage({navigation}) {
  const themedStyles = ThemedStyles();

  const [isRefreshing, setIsRefreshing] = React.useState(false);

  var initialElements = GetSampleCourseList(); // GetCourseArray()

  const [elementState, setElementState] = React.useState(initialElements);
  // Called each time the flat list if refreshed
  const refreshElements = () => {
    setElementState(GetSampleCourseList());
  }

  const onRefresh = () => {
    setIsRefreshing(true);
    refreshElements();
    setIsRefreshing(false);
  }

  return (
    <CommonPart title={"Switch Course"}
      components={
          <View style={[themedStyles.background]}>
            <View style={[themedStyles.flatListView, {height: '100%'}]}>

              <CourseList 
                data={elementState}
                onRefresh={onRefresh} 
                isRefreshing={isRefreshing}
                navigation={navigation}
              />

            </View>

            <View style={{flex: 1}}/>
        </View>
      }
    />
  );
}

/* Internal logic code start */

/* Internal logic code end */

/*************************************************************************************************/

/* Connect to backend logic code start */

/*
  Return an array of courses, each represented by
  {
    courseId
    courseTitle
    courseTimespan
    courseSection
  }
  id can be string/number as long as two elements 
  in the array do not share the same id value
*/
function GetCourseArray()
{

}

/* Connect to backend logic code end */

/*************************************************************************************************/

/* User interface code start */

/* The flat list that is used to show the courses */
function CourseList({ data, onRefresh, isRefreshing, navigation }) {
  const themedStyles = ThemedStyles();

  const Item = ({title, index}) => 
  {
    return (
      <View style={themedStyles.item}>
        <Pressable 
          onPress={()=>{
            setCurrentCourseIndex(index);
            navigation.goBack();
          }}
        >
          <Text style={themedStyles.title}>{title}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => <Item 
                                      title={item.course.getTitle()}
                                      index={index}
                                    />}
      keyExtractor={item => item.course.getID()}
      showsVerticalScrollIndicator={false}
      onRefresh={onRefresh}
      refreshing={isRefreshing}
    />
  );
}

/* User interface code end */

function ThemedStyles() {
  const themeManager = React.useContext(ThemeContext);
  const currentTheme = themeManager.theme;

  return (StyleSheet.create({
    background: StyleSheet.flatten([
      {top: -20},
      KolynStyle.kolynPrimaryColorScreen(currentTheme.mainColor)
    ]),

    flatListView: {
      top: 50, 
      alignSelf: 'center', 
      flex: 5,
      backgroundColor: currentTheme.mainColor
    },

    item: StyleSheet.flatten([
    {
      top: 0, 
      width: width*0.9, 
      alignSelf: 'center', 
      marginTop: 10, 
      borderRadius: 10, 
      backgroundColor: currentTheme.primaryColor, 
      borderWidth: 4,
      borderColor: currentTheme.primaryColor
    }, 
      KolynStyle.kolynButton(currentTheme.mainColor),
    ]),
  
    title: StyleSheet.flatten([
      {alignSelf: 'center', height: 55},
      KolynStyle.kolynLabel(currentTheme.fontSizes.small, currentTheme.mainFont, currentTheme.primaryColor)
    ]),
  }));
}
