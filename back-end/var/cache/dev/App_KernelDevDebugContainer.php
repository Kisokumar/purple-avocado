<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerOyb84Sc\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerOyb84Sc/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerOyb84Sc.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerOyb84Sc\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerOyb84Sc\App_KernelDevDebugContainer([
    'container.build_hash' => 'Oyb84Sc',
    'container.build_id' => '2b66460c',
    'container.build_time' => 1671534119,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerOyb84Sc');
