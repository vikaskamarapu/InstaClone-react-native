import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import ToggleSwitch from "toggle-switch-react-native";
import { Switch } from "react-native";

const PLACEHOLDER_IMG =
  "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg";

const uploadPostSchema = yup.object().shape({
  imageUrl: yup.string().url().required("A url is required"),
  caption: yup.string().max(2200, "caption has reached the character limit."),
}); 

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const [switchOn, setSwitchOn] = useState(false);
  const [facebookOn, setFacebookOn] = useState(false);
  const [twitterOn, setTwitterOn] = useState(false);
  const [tumblrOn, setTumblrOn] = useState(false);
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View style={{ margin: 12, marginTop: 21, flexDirection: "row" }}>
            <Image
              source={{ uri: PLACEHOLDER_IMG }}
              style={{ width: 55, height: 55 }}
            />

            <TextInput
              style={{ color: "#c7c7c7", fontSize: 15, marginLeft: 13 }}
              placeholder="Write a caption..."
              placeholderTextColor={"grey"}
              multiline={true}
              onChangeText={handleChange("caption")}
              onBlur={handleBlur("caption")}
              value={values.caption}
            />
          </View>
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Divider width={1} orientation="vertical" />
            <Text style={[styles.commonTag]}>Tag people</Text>
            <Divider width={1} orientation="vertical" />
            <Text style={[styles.commonTag]}>Add location</Text>
            <Divider width={1} orientation="vertical" />
            <Text style={[styles.commonTag]}>Add event</Text>
            <Divider width={1} orientation="vertical" />
            <Text style={[styles.commonTag]}>Add music</Text>
            <Divider width={1} orientation="vertical" />
            <Text style={[styles.commonTag]}>Some music...</Text>
            <Divider width={1} orientation="vertical" />
            <View
              style={[
                styles.botttomContainer,
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 8,
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginLeft: 7,
                }}
              >
                <Text style={styles.commonText}>Boost post</Text>
                {switchOn ? (
                  <Text style={{ color: "grey" }}>
                    We'll set up your ad settings next
                  </Text>
                ) : (
                  <></>
                )}
              </View>
              <Switch
                value={switchOn}
                trackColor={{ false: "grey", true: "#1C4D78" }}
                thumbColor={switchOn ? "#3987F1" : "white"}
                onValueChange={() => {
                  setSwitchOn(!switchOn);
                }}
              />
            </View>
          </View>
          <Divider width={1} orientation="vertical" />
          <View style={{ flexDirection: "column", padding: 20 }}>
            <Text style={[styles.commonText, { marginBottom: 7 }]}>
              Also post to
            </Text>
            <View style={styles.botttomContainer}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{ uri: PLACEHOLDER_IMG }}
                  style={{ borderRadius: 50, width: 45, height: 45 }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.commonText}>Facebook</Text>
                  <Text style={{ color: "grey" }}>Lokesh Chinthala</Text>
                </View>
              </View>
              <Switch
                value={facebookOn}
                trackColor={{ false: "grey", true: "#1C4D78" }}
                thumbColor={facebookOn ? "#3987F1" : "white"}
                onValueChange={() => {
                  setFacebookOn(!facebookOn);
                }}
              />
            </View>
            <View style={styles.botttomContainer}>
              <Text style={{ color: "white", fontSize: 16 }}>Twitter</Text>
              <Switch
                value={twitterOn}
                trackColor={{ false: "grey", true: "#1C4D78" }}
                thumbColor={twitterOn ? "#3987F1" : "white"}
                onValueChange={() => {
                  setTwitterOn(!twitterOn);
                }}
              />
            </View>
            <View style={styles.botttomContainer}>
              <Text style={styles.commonText}>Tumblr</Text>
              <Switch
                value={tumblrOn}
                trackColor={{ false: "grey", true: "#1C4D78" }}
                thumbColor={tumblrOn ? "#3987F1" : "white"}
                onValueChange={() => {
                  setTumblrOn(!tumblrOn);
                }}
              />
            </View>
            <View style={[styles.botttomContainer, { marginTop: 10 }]}>
              <Text style={[styles.commonText, { marginTop: 5 }]}>
                Advanced settings
              </Text>
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/30/ffffff/chevron-right.png",
                }}
                style={{ width: 15, height: 15, marginRight: 10 }}
              />
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  botttomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commonText: {
    color: "white",
    fontSize: 16,
  },
  commonTag: {
    color: "white",
    fontSize: 16,
    padding: 16,
  },
});

export default FormikPostUploader;
