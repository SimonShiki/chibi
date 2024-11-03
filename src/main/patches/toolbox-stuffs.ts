import format from 'format-message';

export function injectToolbox (xmlList: HTMLElement[], workspace: DucktypedBlocksWorkspace) {
    // Add separator and label
    const sep = document.createElement('sep');
    sep.setAttribute('gap', '36');
    xmlList.push(sep);
    const label = document.createElement('label');
    label.setAttribute('text', '💡 Eureka');
    xmlList.push(label);

    // Add dashboard button
    const dashboardButton = document.createElement('button');
    dashboardButton.setAttribute('text', format({
        id: 'eureka.openDashboard',
        default: 'Open Dashboard'
    }));
    dashboardButton.setAttribute('callbackKey', 'EUREKA_FRONTEND');
    workspace.registerButtonCallback('EUREKA_FRONTEND', () => {
        
    });
    xmlList.push(dashboardButton);

    // Add load from url button
    const sideloadButton = document.createElement('button');
    sideloadButton.setAttribute('text', format({
        id: 'eureka.sideload',
        default: 'Sideload'
    }));
    sideloadButton.setAttribute('callbackKey', 'EUREKA_SIDELOAD');
    workspace.registerButtonCallback('EUREKA_SIDELOAD', () => {

    });
    xmlList.push(sideloadButton);

    // Add eureka detection
    const mutation = document.createElement('mutation');
    mutation.setAttribute('eureka', 'installed');
    const field = document.createElement('field');
    field.setAttribute('name', 'VALUE');
    field.innerHTML = '🧐 Eureka?';
    const block = document.createElement('block');
    block.setAttribute('type', 'argument_reporter_boolean');
    block.setAttribute('gap', '16');
    block.appendChild(field);
    block.appendChild(mutation);
    xmlList.push(block);
    return xmlList;
}
