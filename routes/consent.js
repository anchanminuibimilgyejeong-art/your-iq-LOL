const _0 = require("crypto");
const { renderConsent: _1 } = require("../views/consent");
const { getClientIp: _2, lookupIp: _3 } = require("../lib/ip-location");

const _4 = [
  "GET",
  "POST",
  "/consent",
  "/collect",
  "source",
  "error",
  "city",
  "region",
  "country",
  "postal",
  "latitude",
  "longitude",
  "org",
  "note",
  "IP 위치 조회 실패: ",
  "id",
  "createdAt",
  "consent",
  "ip",
  "geo",
  "request",
  "userAgent",
  "headers",
  "user-agent",
  "",
  "addVisit",
  "writeHead",
  "Location",
  "/result?id=",
  "end",
  "method",
  "pathname",
  "handle",
  "url",
  "host",
  "forwardedFor",
  "x-forwarded-for",
  "forwardedProto",
  "x-forwarded-proto",
  "realIp",
  "x-real-ip",
  "acceptLanguage",
  "accept-language",
  "accept",
  "referer",
  "referrer",
  "connectionIp",
  "socket",
  "remoteAddress",
  "httpVersion"
];

const _5 = (_6) => _4[_6];

function createConsentRoutes(_7) {
  const _8 = _7.send;
  const _9 = _7.visitStore;

  const _a = async (_b, _c) => {
    const _d = _2(_b);
    let _e;

    try {
      _e = await _3(_d);
    } catch (_f) {
      _e = {
        [_5(4)]: _5(5),
        [_5(6)]: _5(24),
        [_5(7)]: _5(24),
        [_5(8)]: _5(24),
        [_5(9)]: _5(24),
        [_5(10)]: _5(24),
        [_5(11)]: _5(24),
        [_5(12)]: _5(24),
        [_5(13)]: _5(14) + _f.message
      };
    }

    const _10 = {
      [_5(15)]: _0.randomUUID(),
      [_5(16)]: new Date().toISOString(),
      [_5(17)]: true,
      [_5(18)]: _d,
      [_5(19)]: _e,
      [_5(20)]: _11(_b),
      [_5(21)]: _b[_5(22)][_5(23)] || _5(24)
    };

    _9[_5(25)](_10);
    _c[_5(26)](303, { [_5(27)]: _5(28) + encodeURIComponent(_10[_5(15)]) });
    _c[_5(29)]();
  };

  const _12 = async (_13, _14, _15) => {
    if (_13[_5(30)] === _5(0) && _15[_5(31)] === _5(2)) {
      await _a(_13, _14);
      return true;
    }

    if (_13[_5(30)] === _5(1) && _15[_5(31)] === _5(3)) {
      await _a(_13, _14);
      return true;
    }

    return false;
  };

  return { [_5(32)]: _12 };
}

function _11(_16) {
  return {
    [_5(30)]: _16[_5(30)],
    [_5(33)]: _16[_5(33)] || _5(24),
    [_5(34)]: _16[_5(22)][_5(34)] || _5(24),
    [_5(35)]: _16[_5(22)][_5(36)] || _5(24),
    [_5(37)]: _16[_5(22)][_5(38)] || _5(24),
    [_5(39)]: _16[_5(22)][_5(40)] || _5(24),
    [_5(21)]: _16[_5(22)][_5(23)] || _5(24),
    [_5(41)]: _16[_5(22)][_5(42)] || _5(24),
    [_5(43)]: _16[_5(22)][_5(43)] || _5(24),
    [_5(44)]: _16[_5(22)][_5(44)] || _16[_5(22)][_5(45)] || _5(24),
    [_5(46)]: _16[_5(47)][_5(48)] || _5(24),
    [_5(49)]: _16[_5(49)] || _5(24)
  };
}

module.exports = { createConsentRoutes };
