import { firestore, storage } from "../app/configs/connections/firebase";
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { uploadString, ref, getDownloadURL } from "firebase/storage";

import * as refs from "../app/configs/constants/firebase_refs";

export const postTweet = async (body, image = null) => {
  const tweetDocRef = await addDoc(
    collection(firestore, refs.TWEETS_COLLECTION),
    {
      body,
      created_at: new Date(),
      likes: 0,
      dislikes: 0,
    }
  );

  if (image) {
    const ext = image.mimeType.split("/")[1];
    var metadata = {
      contentType: image.mimeType,
    };
    const imagePath = `${refs.TWEETS_IMAGES_DIR}/${tweetDocRef.id}/0.${ext}`;
    const imageRef = ref(storage, imagePath);
    await uploadString(imageRef, image.base64, "data_url", metadata);
    const imageUrl = await getDownloadURL(imageRef);
    await setDoc(tweetDocRef, { image: imageUrl }, { merge: true });
  }
};

export const getTweetsList = async () => {
  const tweetsCollectionRef = collection(firestore, refs.TWEETS_COLLECTION);
  const tweetsCollectionQuery = query(
    tweetsCollectionRef,
    orderBy("created_at", "desc")
  );

  const tweetsCollectionSnapshots = await getDocs(tweetsCollectionQuery);

  return tweetsCollectionSnapshots.docs.map((doc) => {
    return {
      ...doc.data(),
      created_at: doc.data().created_at.toDate().getTime(),
    };
  });
};
