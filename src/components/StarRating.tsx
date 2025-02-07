import React from 'react';
import {useState} from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import FullStarIcon from '../assets/icons/FullStarIcon';
import EmptyStarIcon from '../assets/icons/EmptyStarIcon';

const styledRating: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

interface StarRatingProps {
  ratingStars: number;
  size: number;
  defaultRating: number;
  onSetRating: React.Dispatch<React.SetStateAction<number>>;
}

export default function StarRating({
  ratingStars = 5,
  size = 48,
  defaultRating = 0,
  onSetRating,
}: StarRatingProps) {
  const [rating, setRating] = useState(
    defaultRating <= ratingStars ? defaultRating : 0,
  );

  function handleRate(ratingArg: number) {
    setRating(ratingArg);
    onSetRating(ratingArg);
  }

  return (
    <View style={styledRating}>
      {Array.from({length: ratingStars}, (_, i) => (
        <Star
          key={i}
          onRate={() => handleRate(i + 1)}
          full={rating >= i + 1}
          size={size}
        />
      ))}
    </View>
  );
}

interface StarProps {
  onRate: () => void;
  full: boolean;
  size: number;
}

function Star({onRate, full, size}: StarProps) {
  const starStyle = {
    width: size,
    height: size,
  };
  return (
    <Pressable style={starStyle} onPress={onRate}>
      {full ? <FullStarIcon /> : <EmptyStarIcon />}
    </Pressable>
  );
}
