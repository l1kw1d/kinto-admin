/* @flow */
import type {
  Capabilities,
  BucketState,
  BucketPermissions,
  SessionState,
  BucketRouteMatch,
} from "../../types";

import React, { PureComponent } from "react";

import * as BucketActions from "../../actions/bucket";
import Spinner from "../Spinner";
import BucketTabs from "./BucketTabs";
import PermissionsForm from "../PermissionsForm";
import { canEditBucket } from "../../permission";

export type OwnProps = {|
  match: BucketRouteMatch,
|};

export type StateProps = {|
  session: SessionState,
  bucket: BucketState,
  capabilities: Capabilities,
|};

export type Props = {
  ...OwnProps,
  ...StateProps,
  updateBucket: typeof BucketActions.updateBucket,
};

export default class BucketPermissions_ extends PureComponent<Props> {
  onSubmit = ({ formData }: { formData: BucketPermissions }) => {
    const { match, updateBucket } = this.props;
    const {
      params: { bid },
    } = match;
    updateBucket(bid, { permissions: formData });
  };

  get readonly(): boolean {
    const { session, bucket } = this.props;
    return !canEditBucket(session, bucket);
  }

  render() {
    const { match, capabilities, bucket } = this.props;
    const {
      params: { bid },
    } = match;
    const { busy, permissions, groups } = bucket;
    const acls = ["read", "write", "collection:create", "group:create"];
    if (busy) {
      return <Spinner />;
    }
    return (
      <div>
        <h1>
          Edit <b>{bid}</b> bucket permissions
        </h1>
        <BucketTabs
          bid={bid}
          capabilities={capabilities}
          selected="permissions">
          <PermissionsForm
            bid={bid}
            groups={groups}
            permissions={permissions}
            acls={acls}
            readonly={this.readonly}
            onSubmit={this.onSubmit}
          />
        </BucketTabs>
      </div>
    );
  }
}
