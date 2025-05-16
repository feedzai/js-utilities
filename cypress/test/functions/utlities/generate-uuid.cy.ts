/**
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2025 Feedzai, Rights Reserved.
 */

import { generateUUID } from "src/functions";

describe("generateUUID", () => {
  it("generates a UUID", () => {
    const id = generateUUID();
    expect(id).to.exist;
    expect(typeof id).to.equal("string");
  });

  it("should generate a compliant RFC 4122 UUID", () => {
    const id = generateUUID();
    expect(id).to.match(
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
    );
  });
});
