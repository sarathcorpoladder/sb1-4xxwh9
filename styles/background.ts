export const backgroundStyles = `
  .bg-grid {
    background-image: 
      linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .text-gradient {
    background: linear-gradient(to right, #2563eb, #000000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .shine {
    position: relative;
    overflow: hidden;
  }
  .shine::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(45deg);
    animation: shine 3s infinite;
  }
  @keyframes shine {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(100%) rotate(45deg); }
  }
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`