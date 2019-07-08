function solve(params) {
    if(params.dizziness){
        params.levelOfHydrated = params.weight * params.experience * 0.1;
        params.dizziness = false;
    }
    return params
}
console.log(solve({ weight: 80,
experience: 1,
levelOfHydrated: 0,
dizziness: true }));