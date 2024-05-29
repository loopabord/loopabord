// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file user/v1/user.proto (package user.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message user.v1.CreateUserRequest
 */
export class CreateUserRequest extends Message<CreateUserRequest> {
  /**
   * @generated from field: user.v1.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<CreateUserRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.CreateUserRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateUserRequest {
    return new CreateUserRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateUserRequest {
    return new CreateUserRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateUserRequest {
    return new CreateUserRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateUserRequest | PlainMessage<CreateUserRequest> | undefined, b: CreateUserRequest | PlainMessage<CreateUserRequest> | undefined): boolean {
    return proto3.util.equals(CreateUserRequest, a, b);
  }
}

/**
 * @generated from message user.v1.CreateUserResponse
 */
export class CreateUserResponse extends Message<CreateUserResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<CreateUserResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.CreateUserResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateUserResponse {
    return new CreateUserResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateUserResponse {
    return new CreateUserResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateUserResponse {
    return new CreateUserResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateUserResponse | PlainMessage<CreateUserResponse> | undefined, b: CreateUserResponse | PlainMessage<CreateUserResponse> | undefined): boolean {
    return proto3.util.equals(CreateUserResponse, a, b);
  }
}

/**
 * @generated from message user.v1.ReadUserRequest
 */
export class ReadUserRequest extends Message<ReadUserRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<ReadUserRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.ReadUserRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadUserRequest {
    return new ReadUserRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadUserRequest {
    return new ReadUserRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadUserRequest {
    return new ReadUserRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReadUserRequest | PlainMessage<ReadUserRequest> | undefined, b: ReadUserRequest | PlainMessage<ReadUserRequest> | undefined): boolean {
    return proto3.util.equals(ReadUserRequest, a, b);
  }
}

/**
 * @generated from message user.v1.ReadUserResponse
 */
export class ReadUserResponse extends Message<ReadUserResponse> {
  /**
   * @generated from field: user.v1.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<ReadUserResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.ReadUserResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadUserResponse {
    return new ReadUserResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadUserResponse {
    return new ReadUserResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadUserResponse {
    return new ReadUserResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ReadUserResponse | PlainMessage<ReadUserResponse> | undefined, b: ReadUserResponse | PlainMessage<ReadUserResponse> | undefined): boolean {
    return proto3.util.equals(ReadUserResponse, a, b);
  }
}

/**
 * @generated from message user.v1.ReadAllUsersRequest
 */
export class ReadAllUsersRequest extends Message<ReadAllUsersRequest> {
  constructor(data?: PartialMessage<ReadAllUsersRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.ReadAllUsersRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadAllUsersRequest {
    return new ReadAllUsersRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadAllUsersRequest {
    return new ReadAllUsersRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadAllUsersRequest {
    return new ReadAllUsersRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReadAllUsersRequest | PlainMessage<ReadAllUsersRequest> | undefined, b: ReadAllUsersRequest | PlainMessage<ReadAllUsersRequest> | undefined): boolean {
    return proto3.util.equals(ReadAllUsersRequest, a, b);
  }
}

/**
 * @generated from message user.v1.ReadAllUsersResponse
 */
export class ReadAllUsersResponse extends Message<ReadAllUsersResponse> {
  /**
   * @generated from field: repeated user.v1.User users = 1;
   */
  users: User[] = [];

  constructor(data?: PartialMessage<ReadAllUsersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.ReadAllUsersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "users", kind: "message", T: User, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadAllUsersResponse {
    return new ReadAllUsersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadAllUsersResponse {
    return new ReadAllUsersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadAllUsersResponse {
    return new ReadAllUsersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ReadAllUsersResponse | PlainMessage<ReadAllUsersResponse> | undefined, b: ReadAllUsersResponse | PlainMessage<ReadAllUsersResponse> | undefined): boolean {
    return proto3.util.equals(ReadAllUsersResponse, a, b);
  }
}

/**
 * @generated from message user.v1.UpdateUserRequest
 */
export class UpdateUserRequest extends Message<UpdateUserRequest> {
  /**
   * @generated from field: user.v1.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<UpdateUserRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.UpdateUserRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserRequest {
    return new UpdateUserRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserRequest {
    return new UpdateUserRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserRequest {
    return new UpdateUserRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateUserRequest | PlainMessage<UpdateUserRequest> | undefined, b: UpdateUserRequest | PlainMessage<UpdateUserRequest> | undefined): boolean {
    return proto3.util.equals(UpdateUserRequest, a, b);
  }
}

/**
 * Empty response for UpdateUser RPC
 *
 * @generated from message user.v1.UpdateUserResponse
 */
export class UpdateUserResponse extends Message<UpdateUserResponse> {
  constructor(data?: PartialMessage<UpdateUserResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.UpdateUserResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserResponse {
    return new UpdateUserResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserResponse {
    return new UpdateUserResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserResponse {
    return new UpdateUserResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateUserResponse | PlainMessage<UpdateUserResponse> | undefined, b: UpdateUserResponse | PlainMessage<UpdateUserResponse> | undefined): boolean {
    return proto3.util.equals(UpdateUserResponse, a, b);
  }
}

/**
 * @generated from message user.v1.DeleteUserRequest
 */
export class DeleteUserRequest extends Message<DeleteUserRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<DeleteUserRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.DeleteUserRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteUserRequest {
    return new DeleteUserRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteUserRequest {
    return new DeleteUserRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteUserRequest {
    return new DeleteUserRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteUserRequest | PlainMessage<DeleteUserRequest> | undefined, b: DeleteUserRequest | PlainMessage<DeleteUserRequest> | undefined): boolean {
    return proto3.util.equals(DeleteUserRequest, a, b);
  }
}

/**
 * Empty response for DeleteUser RPC
 *
 * @generated from message user.v1.DeleteUserResponse
 */
export class DeleteUserResponse extends Message<DeleteUserResponse> {
  constructor(data?: PartialMessage<DeleteUserResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.DeleteUserResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteUserResponse {
    return new DeleteUserResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteUserResponse {
    return new DeleteUserResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteUserResponse {
    return new DeleteUserResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteUserResponse | PlainMessage<DeleteUserResponse> | undefined, b: DeleteUserResponse | PlainMessage<DeleteUserResponse> | undefined): boolean {
    return proto3.util.equals(DeleteUserResponse, a, b);
  }
}

/**
 * @generated from message user.v1.User
 */
export class User extends Message<User> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 3;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "user.v1.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}
