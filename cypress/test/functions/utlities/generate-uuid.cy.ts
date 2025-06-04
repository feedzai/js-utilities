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

  it("should generate unique UUIDs", () => {
    const uuids = new Set();
    const iterations = 1000;

    for (let i = 0; i < iterations; i++) {
      const uuid = generateUUID();
      expect(uuids.has(uuid)).to.be.false;
      uuids.add(uuid);
    }

    expect(uuids.size).to.equal(iterations);
  });

  it("should generate UUIDs with correct version and variant bits", () => {
    const uuid = generateUUID();
    const parts = uuid.split("-");

    // Version 4 UUID has version bits set to 0100
    const versionByte = parseInt(parts[2].substring(0, 2), 16);
    expect(versionByte & 0xf0).to.equal(0x40);

    // Variant bits should be set to 10
    const variantByte = parseInt(parts[3].substring(0, 2), 16);
    expect(variantByte & 0xc0).to.equal(0x80);
  });

  it("should generate UUIDs with consistent length", () => {
    const uuid = generateUUID();
    expect(uuid.length).to.equal(36); // 32 characters + 4 hyphens
  });

  it("should generate UUIDs with correct character set", () => {
    const uuid = generateUUID();
    expect(uuid).to.match(/^[0-9a-fA-F-]+$/);
  });

  it("should handle multiple consecutive calls", () => {
    const uuids = Array.from({ length: 10 }, () => generateUUID());
    const uniqueUuids = new Set(uuids);

    expect(uuids.length).to.equal(uniqueUuids.size);
    uuids.forEach((uuid) => {
      expect(uuid).to.match(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
      );
    });
  });
});
