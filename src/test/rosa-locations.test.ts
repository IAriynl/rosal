import { describe, expect, it } from 'vitest';
import { locations } from '@/story/experience-data';

describe('User supplied travel coordinates', () => {
  it('starts at 34°17\'37.7"N 47°01\'36.9"E', () => {
    expect(locations.origin[0]).toBeCloseTo(34 + 17 / 60 + 37.7 / 3600, 6);
    expect(locations.origin[1]).toBeCloseTo(47 + 1 / 60 + 36.9 / 3600, 6);
  });
  it('lands at 32°20\'03.9"N 50°51\'15.1"E', () => {
    expect(locations.destination[0]).toBeCloseTo(32 + 20 / 60 + 3.9 / 3600, 6);
    expect(locations.destination[1]).toBeCloseTo(50 + 51 / 60 + 15.1 / 3600, 6);
  });
});