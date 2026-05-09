function renderConsent() {
  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>IP 위치 수집 동의</title>
</head>
<body>
  <form method="post" action="/collect">
    <label>
      <input type="checkbox" required>
      IP, IP 기반 대략 위치, 접속 요청 정보 수집에 동의합니다.
    </label>
    <button type="submit">확인</button>
  </form>
</body>
</html>`;
}

module.exports = { renderConsent };
