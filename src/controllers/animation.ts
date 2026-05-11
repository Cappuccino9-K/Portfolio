
export const initSkillAnimation = () => {
  const skillElement = document.getElementById('skill') as HTMLElement | null;

  if (skillElement) {
    setTimeout(() => {
        
      skillElement.classList.remove('d-none');
      
      skillElement.classList.add('onscroll-fade-in');
      
      console.log('Skill 애니메이션 시작!');
    }, 2000);
  } else {
    console.error("ID가 'skill'인 요소를 찾을 수 없습니다.");
  }
};