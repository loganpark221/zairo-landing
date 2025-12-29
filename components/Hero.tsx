import React from "react";

export const Hero: React.FC = () => {
  // 1) 확대 (숫자 올리면 더 커짐)
  const zoom = 1.45;

  // 2) 위치 미세조정 (px)
  //    +x: 오른쪽, -x: 왼쪽
  //    +y: 아래,  -y: 위
  const offsetX = -120; // 왼쪽으로 조금
  const offsetY = -40;  // 위로 조금

  // 3) 오른쪽 아래 "Built with Spline" 잘라내기용 마스크 (px)
  const cropRight = 220;
  const cropBottom = 110;

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-zairo-black">
      {/* iframe 확대/이동 */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`,
          transformOrigin: "center center",
        }}
      >
        <iframe
          src="https://my.spline.design/reactiveorb-UZyPHnWq6NbM45pp7qs1yH8Z/?embed=1"
          title="ZAIRO Hero"
          allow="fullscreen; autoplay"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>

      {/* 오른쪽 아래 배지 가리기(크롭 마스크) */}
      <div
        className="absolute right-0 bottom-0 bg-zairo-black pointer-events-none"
        style={{ width: cropRight, height: cropBottom }}
      />
    </section>
  );
};