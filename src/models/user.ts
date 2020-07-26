export enum actStatus {
    active = 1,
    away,
    dnd
}
export interface user {
    id: Number,
    name: String,
    imageUrl: String,
    friendsList: user[],
    isPlaying: Boolean,
    activityStatus: actStatus
}