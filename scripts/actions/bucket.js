import {
  BUCKET_BUSY,
  BUCKET_LOAD_SUCCESS,
  BUCKET_CREATE_REQUEST,
  BUCKET_UPDATE_REQUEST,
  BUCKET_DELETE_REQUEST,
  BUCKET_RESET,
  COLLECTION_CREATE_REQUEST,
  COLLECTION_UPDATE_REQUEST,
  COLLECTION_DELETE_REQUEST,
} from "../constants";


export function bucketBusy(busy) {
  return {type: BUCKET_BUSY, busy};
}

export function bucketLoadSuccess(data, permissions) {
  return {type: BUCKET_LOAD_SUCCESS, data, permissions};
}

export function createBucket(bid, data) {
  return {type: BUCKET_CREATE_REQUEST, bid, data};
}

export function updateBucket(bid, bucketData) {
  return {type: BUCKET_UPDATE_REQUEST, bid, bucketData};
}

export function deleteBucket(bid) {
  return {type: BUCKET_DELETE_REQUEST, bid};
}

export function resetBucket() {
  return {type: BUCKET_RESET};
}

export function createCollection(bid, collectionData) {
  return {type: COLLECTION_CREATE_REQUEST, bid, collectionData};
}

export function updateCollection(bid, cid, collectionData) {
  return {type: COLLECTION_UPDATE_REQUEST, bid, cid, collectionData};
}

export function deleteCollection(bid, cid) {
  return {type: COLLECTION_DELETE_REQUEST, bid, cid};
}
