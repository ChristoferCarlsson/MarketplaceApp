import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/Item";
import ListItemSeparator from "../components/lists/ItemSeparator";
import ListItemDeleteAction from "../components/lists/ItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Are you ready?",
    description: "Just calling to check if you would be available.",
    image: require("../assets/Christofer.jpg"),
  },
  {
    id: 2,
    title: "Hello There",
    description: "Could you maybe give me a call when you are free?",
    image: require("../assets/Christofer.jpg"),
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lectus aliquet, consequat augue at, sodales nisi. Mauris sapien ipsum, blandit in ligula non, viverra mollis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce scelerisque ultricies aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam massa odio, facilisis at orci id, molestie porttitor leo. Sed volutpat nunc dui, id interdum magna aliquam quis. Aliquam convallis turpis eu nulla facilisis, ac pharetra sapien iaculis. Etiam sit amet tincidunt risus, quis porta arcu. Mauris sodales quis neque id tristique. Fusce non ligula cursus, mattis urna vel, dignissim nisi.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lectus aliquet, consequat augue at, sodales nisi. Mauris sapien ipsum, blandit in ligula non, viverra mollis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce scelerisque ultricies aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam massa odio, facilisis at orci id, molestie porttitor leo. Sed volutpat nunc dui, id interdum magna aliquam quis. Aliquam convallis turpis eu nulla facilisis, ac pharetra sapien iaculis. Etiam sit amet tincidunt risus, quis porta arcu. Mauris sodales quis neque id tristique. Fusce non ligula cursus, mattis urna vel, dignissim nisi.",
    image: require("../assets/Christofer.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/Christofer.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
const styles = StyleSheet.create({});
