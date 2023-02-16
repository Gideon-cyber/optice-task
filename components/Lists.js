import React from "react";

import { View, StyleSheet, Text, ScrollView } from "react-native";

const Lists = () => {
  const listItems = [
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      description:
        "A comedic science fiction series by Douglas Adams, following the adventures of an unwitting human and his alien friend as they travel through space.",
    },
    {
      name: "To Kill a Mockingbird",
      description:
        "A Pulitzer Prize-winning novel by Harper Lee, exploring themes of racism, injustice, and the loss of innocence in the American South.",
    },
    {
      name: "The Lord of the Rings",
      description:
        "An epic high fantasy novel by J.R.R. Tolkien, following a hobbit's quest to destroy a powerful ring and save Middle-earth from evil.",
    },
    {
      name: "The Godfather",
      description:
        "A classic crime film directed by Francis Ford Coppola, based on the novel by Mario Puzo and starring Marlon Brando and Al Pacino.",
    },
    {
      name: "Star Wars: Episode IV - A New Hope",
      description:
        "The first film in the Star Wars franchise, directed by George Lucas and featuring iconic characters like Luke Skywalker and Darth Vader.",
    },
    {
      name: "The Shawshank Redemption",
      description:
        "A drama film directed by Frank Darabont, based on the novella by Stephen King and starring Tim Robbins and Morgan Freeman.",
    },
    {
      name: "Apple",
      description:
        "A round fruit with a red, yellow, or green skin and a white inside, commonly eaten raw or used in cooking.",
    },
    {
      name: "Banana",
      description:
        "A long, curved fruit with a yellow or green skin and a soft inside, commonly eaten raw or used in baking and smoothies.",
    },
    {
      name: "Strawberry",
      description:
        "A small, red fruit with a sweet and tangy taste, commonly eaten raw or used in desserts and jams.",
    },
  ];
  return (
    <View style={styles.listContainer}>
      <Text style={styles.header}>Lists</Text>
      <ScrollView>
        {listItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 7,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#cbc3e3",
  },
  textName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Lists;
