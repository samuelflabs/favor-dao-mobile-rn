// @ts-ignore
import React, { useMemo } from "react";
import {Image, StyleSheet, ImageSourcePropType, FlatList,View, Text} from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import {PostInfo} from "../declare/global";
import {getContent} from "../utils/util";
import {useResourceUrl} from "../utils/hook";

export type Props = {
  postInfo: PostInfo
};

const RotationImage: React.FC<Props> = (props) => {
  const { postInfo } = props;
  const info = getContent(postInfo.contents);
  const imagesResUrl = useResourceUrl('images');

  const Item = (item: any) => {
    return (
        <Image
            style={[styles.groupChild]}
            resizeMode="cover"
            source={{uri: `${imagesResUrl}/${item.content}`}}
        />
    )
  }

  return (
      <View style={styles.container}>
        <SwiperFlatList
            // autoplay
            // autoplayDelay={1}
            // autoplayLoop
            showPagination
            data={info[3]}
            renderItem={({ item }) => Item(item)}
            vertical={false}
            style={styles.swiperFlatList}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiperFlatList: {
    marginTop: 10,
    flex: 1,
  },
  groupChild: {
    // position: "absolute",
    // height: "60.69%",
    // width: "100%",
    // top: "39.31%",
    // right: "0%",
    // bottom: "0%",
    // left: "0%",
    // maxWidth: "100%",
    // overflow: "hidden",
    // maxHeight: "100%",
    flex: 1,
    width: 375,
    height: 200,
  },
});

export default RotationImage;
