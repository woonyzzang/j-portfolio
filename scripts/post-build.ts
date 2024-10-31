const { execSync } = require('child_process');

/** 빌드 시 다중 스크립트 실행 */
try {
    execSync('ts-node scripts/update-meta-tags');
    // execSync('ts-node scripts/other-script');
    console.log('All scripts executed successfully.');
} catch (error) {
    console.error('Error executing scripts:', error.message);
    process.exit(1);
}