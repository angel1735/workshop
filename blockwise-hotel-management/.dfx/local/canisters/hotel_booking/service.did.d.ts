import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Booking {
  'id' : BookingId,
  'status' : BookingStatus,
  'guestCount' : bigint,
  'checkInDate' : Time,
  'checkOutDate' : Time,
  'customerId' : CustomerId,
  'roomId' : RoomId,
  'totalPrice' : bigint,
}
export type BookingId = bigint;
export type BookingStatus = { 'cancelled' : null } |
  { 'completed' : null } |
  { 'confirmed' : null };
export type CustomerId = Principal;
export type Result = { 'ok' : BookingId } |
  { 'err' : string };
export type Result_1 = { 'ok' : Room } |
  { 'err' : string };
export type Result_2 = { 'ok' : Booking } |
  { 'err' : string };
export type Result_3 = { 'ok' : null } |
  { 'err' : string };
export interface Room {
  'id' : RoomId,
  'status' : RoomStatus,
  'pricePerNight' : bigint,
  'roomNumber' : string,
  'capacity' : bigint,
  'roomType' : RoomType,
}
export type RoomId = bigint;
export type RoomStatus = { 'occupied' : null } |
  { 'available' : null } |
  { 'maintenance' : null };
export type RoomType = { 'deluxe' : null } |
  { 'presidential' : null } |
  { 'suite' : null } |
  { 'standard' : null };
export type Time = bigint;
export interface _SERVICE {
  'addRoom' : ActorMethod<[string, RoomType, bigint, bigint], RoomId>,
  'cancelBooking' : ActorMethod<[BookingId], Result_3>,
  'getAvailableRooms' : ActorMethod<[], Array<Room>>,
  'getBookingDetails' : ActorMethod<[BookingId], Result_2>,
  'getMyBookings' : ActorMethod<[], Array<Booking>>,
  'getRoomDetails' : ActorMethod<[RoomId], Result_1>,
  'makeBooking' : ActorMethod<[RoomId, Time, Time, bigint], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
