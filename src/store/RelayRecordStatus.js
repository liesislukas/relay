/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayRecordStatus
 * @flow
 * @typechecks
 */

'use strict';

export type RecordStatus = $Enum<typeof RelayRecordStatus>;

var RelayRecordStatus = {
  /**
   * Record exists (either fetched from the server or produced by a local,
   * optimistic update).
   */
  EXISTENT: 'EXISTENT',

  /**
   * Record is known not to exist (either as the result of a mutation, or
   * because the server returned `null` when queried for the record).
   */
  NONEXISTENT: 'NONEXISTENT',

  /**
   * Record status is unknown because it has not yet been fetched from the
   * server.
   */
  UNKNOWN: 'UNKNOWN',
};

module.exports = RelayRecordStatus;
