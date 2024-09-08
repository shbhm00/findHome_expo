import { View, Text, Image, StyleSheet, Alert, Pressable } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import * as Location from "expo-location";
import { styles } from "./styles";
import haversine from "haversine-distance";
import ScreenWrapper from "@/src/components/ScreenWrapper";

// Define types for the params
interface Params {
  image?: string;
  address?: string;
  description?: string;
  id?: number;
  latitude?: number;
  longitude?: number;
}

interface UserLocation {
  latitude: number;
  longitude: number;
}

const DetailScreen: React.FC = () => {
  const params = useLocalSearchParams() as Params;
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [canUnlock, setCanUnlock] = useState<boolean>(false);
  const [locked, setLocked] = useState<boolean>(true);
  // Calculate if user location is within range
  const isWithinRange = (
    userLocation: UserLocation,
    homeLocation: UserLocation
  ): boolean => {
    const distance = haversine(userLocation, homeLocation);
    return distance <= 30; // distance in meters
  };

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        getLocation();
      } else {
        Alert.alert("Permission Denied");
      }
    } catch (error) {
      console.error("Error requesting permission:", error);
    }
  };

  const getLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const userCoords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      // added console.log to get user current location
      console.log("User current location", userCoords);

      setUserLocation(userCoords);

      if (params.latitude && params.longitude) {
        const homeCoords: UserLocation = {
          latitude: params.latitude,
          longitude: params.longitude,
        };
        setCanUnlock(isWithinRange(userCoords, homeCoords));
      }
    } catch (error) {
      console.log("Error getting location:", error);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const onLockButtonPress = useCallback(() => {
    if (canUnlock) {
      setLocked(!locked);
    } else {
      Alert.alert("You are not in range");
    }
  }, [canUnlock, locked]);

  // Create a memoized function to render text information
  const renderTextInfo = useMemo(() => {
    return (title: string, description?: string): JSX.Element => (
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{title}</Text>
        {description && (
          <Text style={styles.descriptionText}>{description}</Text>
        )}
      </View>
    );
  }, []);
  // Create a memoized function to render image
  const renderHomeImage = useMemo(() => {
    return (
      <View>
        <Image source={{ uri: params.image }} style={styles.homeImage} />
        {/* Unlock button only be visible if the user's current location
            is within 30m of the home  */}
        {canUnlock ? (
          <Pressable style={styles.unLockButton} onPress={onLockButtonPress}>
            <Text>{locked ? "Locked" : "UnLocked"}</Text>
          </Pressable>
        ) : null}
      </View>
    );
  }, [params.image, canUnlock, onLockButtonPress, locked]);

  return (
    <ScreenWrapper>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.goBack}>Go Back</Text>
      </Pressable>
      {renderHomeImage}
      {!locked ? (
        <View style={styles.descriptionContainer}>
          {renderTextInfo("Address:", params.address)}
          {renderTextInfo("Description:", params.description)}
        </View>
      ) : null}
    </ScreenWrapper>
  );
};

export default DetailScreen;
